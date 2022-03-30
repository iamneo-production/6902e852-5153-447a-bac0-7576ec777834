package com.examly.service;


import com.examly.Repository.ReviewRepository;

import com.examly.model.Review;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service

public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public Review saveReview(Review review){

        return reviewRepository.save(review);
        
    }

}
