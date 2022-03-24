package com.examly.Repository;

import com.examly.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

    UserModel findByUsername(String username);

    UserModel findByEmail(String email);

    UserModel findByEmailAndPassword(String email, String password);
}