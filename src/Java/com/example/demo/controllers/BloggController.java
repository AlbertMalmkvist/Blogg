package com.example.demo.controllers;

import com.example.demo.entities.Blogg;
import com.example.demo.entities.Bid;
import com.example.demo.repositories.BloggRepo;
import com.example.demo.services.BloggService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/rest")
public class BloggController {
    @Autowired
    BloggService BloggService;

    @GetMapping("/Bloggs")
    public List<Blogg> getAllBloggs(){
        return BloggService.findAllBloggs();
    }

    @GetMapping("/Bloggs/{id}")
    public Blogg getBlogg(@PathVariable int id) {
        return BloggService.findBlogg(id);
    }

    @PostMapping("/Bloggs")
    public Blogg createNewBlogg(@RequestBody Blogg Blogg) {
        return BloggService.createNewBlogg(Blogg);
    }

}