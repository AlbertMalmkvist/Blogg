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
    BloggService bloggService;

    @GetMapping("/Bloggs")
    public List<Blogg> getAllBloggs(){
        return bloggService.findAllBloggs();
    }

    @GetMapping("/Bloggs/{id}")
    public Blogg getBlogg(@PathVariable int id) {
        return bloggService.findBlogg(id);
    }

    @PostMapping("/Bloggs")
    public Blogg createNewBlogg(@RequestBody Blogg blogg) {
        return bloggService.createNewBlogg(Blogg);
    }
}