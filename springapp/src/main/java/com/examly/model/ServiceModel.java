package com.examly.model;

import javax.persistence.*;

@Entity
@Table(name = "service")
public class ServiceModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String serviceCenterId;
    private String serviceCenterName;
    private String serviceCenterPhone;
    private String serviceCenterAddress;
    private String ServiceCenterImage;
    private String serviceCenterEmail;
    private String serviceCenterDes;

    public ServiceModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getServiceCenterId() {
        return serviceCenterId;
    }

    public void setServiceCenterId(String serviceCenterId) {
        this.serviceCenterId = serviceCenterId;
    }

    public String getServiceCenterName() {
        return serviceCenterName;
    }

    public void setServiceCenterName(String serviceCenterName) {
        this.serviceCenterName = serviceCenterName;
    }

    public String getServiceCenterAddress() {
        return serviceCenterAddress;
    }

    public void setServiceCenterAddress(String serviceCenterAddress) {
        this.serviceCenterAddress = serviceCenterAddress;
    }

    public String getServiceCenterPhone() {
        return serviceCenterPhone;
    }

    public void setServiceCenterPhone(String serviceCenterPhone) {
        this.serviceCenterPhone = serviceCenterPhone;
    }

    public String getServiceCenterImage() {
        return ServiceCenterImage;
    }

    public void setServiceCenterImage(String serviceCenterImage) {
        ServiceCenterImage = serviceCenterImage;
    }

    public String getServiceCenterEmail() {
        return serviceCenterEmail;
    }

    public void setServiceCenterEmail(String serviceCenterEmail) {
        this.serviceCenterEmail = serviceCenterEmail;
    }

    public String getServiceCenterDes() {
        return serviceCenterDes;
    }

    public void setServiceCenterDes(String serviceCenterDes) {
        this.serviceCenterDes = serviceCenterDes;
    }
}
