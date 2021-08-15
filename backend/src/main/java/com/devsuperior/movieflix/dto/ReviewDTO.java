package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String text;
    private Long movieId;
    private Long userId;
    private String user;

    public ReviewDTO() {
    }

    public ReviewDTO(Long id, String text, Long movieId, Long userId, String user) {
        this.id = id;
        this.text = text;
        this.movieId = movieId;
        this.userId = userId;
        this.user = user;
    }

    public ReviewDTO(Review obj) {
        id = obj.getId();
        text = obj.getText();
        movieId = obj.getMovie().getId();
        userId = obj.getUser().getId();
        user = obj.getUser().getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}
