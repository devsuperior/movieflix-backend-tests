package com.devsuperior.movieflix.entities;

import java.io.Serializable;
import java.util.Objects;

public class Review implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String text;

    public Review() {
    }

    public Review(Long id, String text) {
        this.id = id;
        this.text = text;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Review review = (Review) o;
        return id.equals(review.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
