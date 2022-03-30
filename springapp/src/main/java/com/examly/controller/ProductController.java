package com.example.controller;

import com.example.Repository.ProductRepository;
import com.example.model.ProductModel;
import com.example.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductRepository productrepo;
@Autowired
private UserController userController;
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addUserAppointment")
    public String addUser(@RequestBody ProductModel product) {

            productService.saveAll(product);
            return "added";

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getUserProduct")
    public List<ProductModel> getUser(@RequestParam ("userId") Long id) {
        return productService.findByuserId(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/cancelappointment/{id}")
    public String deleteProducts(@PathVariable Long id) {
        ProductModel product = productService.findById(id);
        productrepo.delete(product);
        return "deleted";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/editappointment/{id}")
    public ResponseEntity<ProductModel> updateUser(@PathVariable Long id, @RequestBody ProductModel product) {
        ProductModel products = productService.findById(id);
        products.setProductName(product.getProductName());
        products.setProductModelNo(product.getProductModelNo());
        products.setContactNumber(product.getContactNumber());
        products.setDateOfPurchase(product.getDateOfPurchase());
        products.setAvailableSlots(product.getAvailableSlots());
        ProductModel updatedProducts = productrepo.save(products);
        return ResponseEntity.ok(updatedProducts);
    }
}