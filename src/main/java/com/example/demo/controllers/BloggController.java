package com.example.demo.controllers;

import com.example.demo.services.BloggService;
import com.example.demo.entities.Blogg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/rest")
public class BloggController {
    @Autowired
    BloggService bloggService;

    @GetMapping("/article")
    public List<Blogg> getAllBloggs(){
        return bloggService.findAllBloggs();
    }

    @GetMapping("/article/{id}")
    public Blogg getBlogg(@PathVariable int id) {
        return bloggService.findBloggbyId(id);
    }

    @PostMapping("/article")
    public Blogg createNewBlogg(@RequestBody Blogg blogg) {
        return bloggService.createNewBlogg(blogg);
    }
    
    @DeleteMapping("/article/{id}")
    public Blogg deleteBlogg(@PathVariable int id){
        return bloggService.deleteById(id);
    }
}