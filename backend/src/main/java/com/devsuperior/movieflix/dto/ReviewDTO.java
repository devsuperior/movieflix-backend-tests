package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	
	private Long id;
	
	@NotBlank(message = "Campo requirido")
	private String text;
	
	private Long movieId;
	//private UserDTO user;
	
	private List<UserDTO> user = new ArrayList<>();
	
	private String name;
	private String email;
	private Long userId;
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, Long movieId, Long userId, String name, String email) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		//this.user = user;
		this.userId = userId;
		this.name = name;
		this.email = email;
		
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movieId = entity.getMovie().getId();
		userId = entity.getUser().getId();
		name = entity.getUser().getName();
		email = entity.getUser().getEmail();
		
	}

	public ReviewDTO(Review entity, List<User> user) {
		this(entity);
		user.forEach(rev -> this.user.add(new UserDTO(rev)));
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
    
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
}