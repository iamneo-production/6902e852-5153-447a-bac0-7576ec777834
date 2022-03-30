package com.example.Repository;

import com.example.model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Long> {
    // @Query("SELECT id,productName,productModelNo,dateOfPurchase,contactNumber,problemDescription,availableSlots,userId FROM printer.product where UserId=")
    public List<ProductModel> findAllByUserId(@Param("userId") Long id);
}
