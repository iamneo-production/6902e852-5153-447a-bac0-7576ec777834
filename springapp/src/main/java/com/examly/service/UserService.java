package com.examly.service;

import com.examly.Repository.UserRepository;
import com.examly.model.LoginModel;
import com.examly.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository authrepo;

    public UserService(UserRepository authrepo) {
        super();
        this.authrepo = authrepo;
    }

    public UserService() {

    }
    @Autowired
    public PasswordEncoder passwordEncoder;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserModel user = authrepo.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + email);
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                new ArrayList<>());

    }
    public void saveUser(UserModel user) {

        //BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
        String encodedPassword= passwordEncoder.encode(user.getPassword());
        String encodedConfirmPassword=passwordEncoder.encode(user.getConfirmpassword());
        user.setPassword(encodedPassword);
        user.setConfirmpassword(encodedConfirmPassword);
        authrepo.save(user);
    }


    public List<UserModel> findAll() {
        return authrepo.findAll();
    }


    public UserModel findByEmail(String email) {
        return authrepo.findByEmail(email);

    }
    public Boolean findByLoginEmail(LoginModel loginModel)
    {
        String password=authrepo.findByEmail(loginModel.getEmail()).getPassword();
       // BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
        return passwordEncoder.matches(loginModel.getPassword(), password);
    }


}
