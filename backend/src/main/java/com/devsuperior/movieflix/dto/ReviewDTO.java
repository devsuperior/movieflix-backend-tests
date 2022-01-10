package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	
	private Long id;
	
	@Size(min = 1, max = 255, message = "Mensagem inválida, por favor digitar entre 5 a 60 caracteres!")
	@NotBlank(message = "Campo requirido")
	@NotEmpty
	private String text;
	
	private Long movieId;
	
	private UserDTO userId;
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, Long movieId, UserDTO userId) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.userId = userId;
		
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movieId = entity.getMovie().getId();
		userId = new UserDTO(entity.getUser());
	}
   /*
	public ReviewDTO(Review entity, List<User> user) {
		this(entity);
		user.forEach(rev -> this.user.add(new UserDTO(rev)));
	}
   */
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

	public UserDTO getUserId() {
		return userId;
	}

	public void setUserId(UserDTO userId) {
		this.userId = userId;
	}

	
	
}