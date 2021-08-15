package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class UserDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String email;

    private List<ReviewDTO> reviews = new ArrayList<>();

    Set<RoleDTO> roles = new HashSet<>();

    public UserDTO() {
    }

    public UserDTO(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public UserDTO(User obj) {
        id = obj.getId();
        name = obj.getName();
        email = obj.getEmail();
        obj.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
    }

    public UserDTO(User obj, List<Review> reviews) {
        this(obj);
        reviews.forEach(review -> this.reviews.add(new ReviewDTO(review)));
    }

}
