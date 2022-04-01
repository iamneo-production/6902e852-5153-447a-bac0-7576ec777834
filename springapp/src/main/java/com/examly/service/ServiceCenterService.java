package com.examly.service;

import com.examly.Repository.ServiceRepository;
import com.examly.model.ServiceModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceCenterService {
    @Autowired
    public ServiceRepository servicerepo;

    public void saveAll(ServiceModel service) {
        servicerepo.save(service);
    }

    public ServiceModel findById(Long id) {
        Optional<ServiceModel> service = servicerepo.findById(id);
        ServiceModel serviceCenter = service.get();
        return serviceCenter;
    }
     public ServiceModel findByServiceCenterEmail(String serviceCenterEmail) {
        return servicerepo.findByServiceCenterEmail(serviceCenterEmail);

    }
    public void deleteAll() {
        servicerepo.deleteAll();
    }

    public List<ServiceModel> findAll() {
        return servicerepo.findAll();
    }
}
