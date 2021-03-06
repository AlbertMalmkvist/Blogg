package com.example.demo.services;

import com.example.demo.entities.Blogg;
import com.example.demo.repositories.BloggRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloggService {
    @Autowired
    BloggRepo bloggRepo;

    public List<Blogg> findAllBloggs() {
        return (List<Blogg>) bloggRepo.findAllByOrderByPublicationDesc();
    }
    public Blogg findBloggbyId(int id) {
        Blogg blogg=bloggRepo.findById(id);
        if ( blogg == null ) return null;
        return blogg;
    }
    public Blogg createNewBlogg(Blogg blogg) {
        return bloggRepo.save(blogg);
    }
    public Blogg deleteById(int id){
        Blogg blogg = bloggRepo.deleteById(id);
        if ( blogg == null ) return null;
        return blogg;
    }
}