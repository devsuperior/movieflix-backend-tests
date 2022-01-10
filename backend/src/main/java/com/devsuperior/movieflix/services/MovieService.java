package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.DatabaseException;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest){
		Genre genres =  (genreId == 0) ? null : (genreRepository.getOne(genreId));
		Page<Movie> page = repository.find(genres, pageRequest);
		return page.map(x -> new MovieDTO(x));
	}
	
	
	@Transactional(readOnly = true)
	public List<MovieDTO> findAll() {
		List<Movie> list = repository.findAll();
		return list.stream().map(x -> new MovieDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {	
		Optional<Movie> obj = repository.findById(id);
		Movie entity  = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDTO(entity);
	}
	
	@Transactional
	public MovieDTO insert(MovieDTO dto) {
		Movie entity = new Movie();
		copyDTOEntity(dto, entity);
		entity = repository.save(entity);
		return new MovieDTO(entity);
	}
	

	@Transactional
	public MovieDTO update(Long id, MovieDTO dto) {
		try {
			Movie entity = repository.getOne(id);
			entity.setTitle(dto.getTitle());
			entity.setSubTitle(dto.getSubTitle());
			entity.setYear(dto.getYear());
			entity.setImgUrl(dto.getImgUrl());
			entity.setSynopsis(dto.getSynopsis());
			entity = repository.save(entity);
			return new MovieDTO(entity);
	    }
		catch(EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
    }
	
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);		
		}
        catch(DataIntegrityViolationException e) {
        	throw new DatabaseException("Integrity violation");
        }
	}

	private void copyDTOEntity(MovieDTO dto, Movie entity) {
		entity.setTitle(dto.getTitle());
		entity.setSubTitle(dto.getSubTitle());
		entity.setYear(dto.getYear());
		entity.setImgUrl(dto.getImgUrl());
		entity.setSynopsis(dto.getSynopsis());
		
		entity.getReviews().clear();
		for (ReviewDTO revDTO : dto.getReviews()) {
			Review review =  reviewRepository.getOne(revDTO.getId());
			entity.getReviews().add(review);
		}
	}
	   
}
