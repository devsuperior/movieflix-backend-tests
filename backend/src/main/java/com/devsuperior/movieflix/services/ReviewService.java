package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.dto.UserDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private AuthService authService;

    @Autowired
    private MovieRepository movieRepository;

    @PreAuthorize("hasAnyRole('MEMBER')")
    @Transactional
    public ReviewDTO insert(ReviewDTO dto) {
        User user = authService.authenticated();
        Movie movie = movieRepository.getOne(dto.getMovieId());
        Review entity = new Review();
        entity.setMovie(movie);
        entity.setText(dto.getText());
        entity.setUser(user);
        entity = reviewRepository.save(entity);
        return new ReviewDTO(entity);
    }
}
