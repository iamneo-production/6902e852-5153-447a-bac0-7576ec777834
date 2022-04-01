package com.examly.controller;


import com.examly.model.Review;
import com.examly.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addReview")
    public String addReview(@RequestBody Review review){
        reviewService.saveReview(review);
        return "posted";
    }
}
