package com.examly.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "UserSlotBooking")
public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long p_id;
    private String productName;
    private String productModelNo;
    @Temporal(TemporalType.DATE)
    private Date dateOfPurchase;
    private String contactNumber;
    private String problemDescription;
    private String slotBookingTime;
    private Long userId;

    //@OneToMany(fetch = FetchType.LAZY)
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductModelNo() {
        return productModelNo;
    }

    public void setProductModelNo(String productModelNo) {
        this.productModelNo = productModelNo;
    }

    public Date getDateOfPurchase() {
        return dateOfPurchase;
    }

    public void setDateOfPurchase(Date dateOfPurchase) {
        this.dateOfPurchase = dateOfPurchase;
    }

    public Long getId() {
        return p_id;
    }

    public void setId(Long id) {
        this.p_id = id;
    }
//    public String getDateOfPurchase() {
//        return dateOfPurchase;
//    }
//
//    public void setDateOfPurchase(String dateOfPurchase) {
//        this.dateOfPurchase = dateOfPurchase;
//    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getProblemDescription() {
        return problemDescription;
    }

    public void setProblemDescription(String problemDescription) {
        this.problemDescription = problemDescription;
    }

    public String getSlotBookingTime() {
        return slotBookingTime;
    }

    public void setSlotBookingTime(String slotBookingTime) {
        this.slotBookingTime = slotBookingTime;
    }
}
