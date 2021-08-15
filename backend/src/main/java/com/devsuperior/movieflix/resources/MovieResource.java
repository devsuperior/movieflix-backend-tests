package com.devsuperior.movieflix.resources;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.services.GenreService;
import com.devsuperior.movieflix.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/movies")
public class MovieResource {

    @Autowired
    private MovieService movieService;

    @Autowired
    private GenreService genreService;

    @GetMapping
    public ResponseEntity<Page<MovieDTO>> findAll(
            @RequestParam(value = "genreId", defaultValue = "0") Long genreId,
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "linesPerPage", defaultValue = "10") Integer linesPerPage,
            @RequestParam(value = "direction", defaultValue = "ASC") String direction,
            @RequestParam(value = "orderBy", defaultValue = "title") String orderBy

    ) {
        PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
        Page<MovieDTO> list = movieService.findAllPaged(genreId, pageRequest);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<MovieDTO> findById(@PathVariable Long id) {
        MovieDTO dto = movieService.findById(id);
        return ResponseEntity.ok().body(dto);
    }
}
