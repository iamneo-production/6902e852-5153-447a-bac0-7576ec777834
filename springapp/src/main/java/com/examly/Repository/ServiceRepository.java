package com.examly.Repository;

import com.examly.model.ServiceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ServiceRepository extends JpaRepository<ServiceModel, Long> {
    ServiceModel findByServiceCenterEmail(String serviceCenterEmail);
}
