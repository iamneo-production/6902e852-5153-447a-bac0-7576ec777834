package com.examly.controller;

import com.examly.model.LoginModel;
import com.examly.model.UserModel;
import com.examly.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    public UserModel loginUser;
    @Autowired
    private UserService authService;

    public UserController() {
        super();
    }

    public UserController(UserService authService) {
        super();
        this.authService = authService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signup")
    public String addUser(@RequestBody UserModel user) {
        if (authService.findByEmail(user.getEmail()) == null) {
            if (!user.getPassword().equals(user.getConfrmpassword())) {
                return "Mismatch in password";
            }
            authService.saveUser(user);
            return "New user";
        } else
            return "user Already exist";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/user/login")
    public UserModel isUserPresent(@RequestBody LoginModel login) {

        loginUser = authService.findByEmail(login.getEmail());
        if (loginUser != null) {
                if (login.getPassword().equals(authService.findByEmail(login.getEmail()).getPassword()))
                    return authService.findByEmail(login.getEmail());
        }
        return null;
    }

    @GetMapping("/allUsers")
    public List<UserModel> getAllUsers() {
        return authService.findAll();
    }
}
