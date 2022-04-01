package com.examly.controller;

import com.examly.Security.JwtTokenUtil;
import com.examly.Security.MyUserDetailsService;
import com.examly.model.LoginModel;
import com.examly.model.LoginResponse;
import com.examly.model.UserModel;
import com.examly.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/")
public class UserController {
    public static String token="";
    public UserModel loginUser;
    public UserModel userModel;
    @Autowired
    private UserService authService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MyUserDetailsService userDetailsService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;


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
            if (!user.getPassword().equals(user.getConfirmpassword())) {
                return "Mismatch in password";
            }
            authService.saveUser(user);
            return "New user";
        } else
            return "user Already exist";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<?> createToken(@RequestBody LoginModel login) throws Exception {
        loginUser=authService.findByEmail(login.getEmail());
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(login.getEmail(),login.getPassword()));
        }
        catch (BadCredentialsException e)
        {
            throw new Exception("Incorrect username or password",e);
        }
        final org.springframework.security.core.userdetails.UserDetails userDetails=userDetailsService
                .loadUserByUsername(login.getEmail());
        final String jwt=jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new LoginResponse(jwt,loginUser.getId(),loginUser.getUseroradmin()));

    }



    @GetMapping("/allUsers")
    public List<UserModel> getAllUsers() {
        return authService.findAll();
    }
}
//if (authService.findByEmail(login.getEmail()).getUseroradmin().equals("user")) {
//               if (login.getPassword().equals(authService.findByEmail(login.getEmail()).getPassword()))
//                    return authService.findByEmail(login.getEmail());
//            } else if (authService.findByEmail(login.getEmail()).getUseroradmin().equals("admin")) {
//                if (login.getPassword().equals("admin")) {
//                    return authService.findByEmail(login.getEmail());
//                }
//                else
//              return null;
//        }

//        loginUser = authService.findByEmail(login.getEmail());
//        if (loginUser != null) {
//                if (login.getPassword().equals(authService.findByEmail(login.getEmail()).getPassword()))
//                    return authService.findByEmail(login.getEmail());
//        }
//        return null;