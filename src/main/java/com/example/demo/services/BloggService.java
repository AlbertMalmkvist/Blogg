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
        List<Blogg> Article =  (List<Blogg>) bloggRepo.findAllByOrderByIdDesc();

        for(Blogg blogg : Article) {
        }
        return Article;
    }
    public Blogg findBlogg(int id) {
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