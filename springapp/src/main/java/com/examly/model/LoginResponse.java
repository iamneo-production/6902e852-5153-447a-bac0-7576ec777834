package com.examly.model;

public class LoginResponse {
    private final String jwt;
    private Long id;
    private String useroradmin;
    public LoginResponse(String jwt,Long id,String useroradmin) {
        this.jwt = jwt;
        this.id=id;
        this.useroradmin=useroradmin;
    }

    public String getUseroradmin() {
        return useroradmin;
    }

    public void setUseroradmin(String useroradmin) {
        this.useroradmin = useroradmin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJwt() {
        return jwt;
    }
}
