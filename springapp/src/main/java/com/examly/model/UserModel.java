package com.examly.model;

import javax.persistence.*;

@Entity
@Table(name = "login")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String useroradmin;
    private String email;
    private String username;
    private String phonenumber;
    private String password;
    private String confirmpassword;


//    @OneToMany(cascade = CascadeType.ALL, targetEntity = ProductModel.class)
//    private List<ProductModel> productModel = new ArrayList<>();

    public UserModel() {

    }

    public UserModel(String username, String email) {
        this.username = username;
        this.email = email;
    }

   // public List<ProductModel> getProductModel() {
//        return productModel;
//    }

    //public void ProductModel(List<ProductModel> productModel) {
//        this.productModel = productModel;
//    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getConfirmpassword() {
        return confirmpassword;
    }

    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    }

    public String getUseroradmin() {
        return useroradmin;
    }

    public void setUseroradmin(String useroradmin) {
        this.useroradmin = useroradmin;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
