package com.examly.service;

import com.examly.Repository.ProductRepository;
import com.examly.model.ProductModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productrepo;

    public void saveAll(ProductModel productModel) {
        productrepo.save(productModel);

    }

    public List<ProductModel> findAll() {
        return (List<ProductModel>) productrepo.findAll();
    }

    public ProductModel findById(Long id) {
        Optional<ProductModel> product = productrepo.findById(id);
        ProductModel products = product.get();
        return products;
    }

    public List<ProductModel> findByuserId(Long id) {
//        Optional<ProductModel> product= productrepo.findByUserId(id);
//        ProductModel products=product.get();
        return (List<ProductModel>) productrepo.findAllByUserId(id);
    }

}
