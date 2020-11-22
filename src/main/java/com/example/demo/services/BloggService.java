package com.example.demo.services;

import com.example.demo.entities.Blogg;
import com.example.demo.repositories.BloggRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class BloggService {
    @Autowired
    BloggRepo bloggRepo;

    public List<Blogg> findAllBloggs() {
        List<Blogg> bloggs =  (List<Blogg>) bloggRepo.findAllByOrderByIdDesc();
        for(Blogg blogg : bloggs) {
        }
        return bloggs;
    }
    public Blogg findBlogg(int id) {
        Blogg blogg=bloggRepo.findById(id);
        if ( blogg == null ) return null;
        return blogg;
    }
    public Blogg createNewBlogg(Blogg blogg) {
        Date nowDate = Date.valueOf(LocalDate.now());
        Date publication = Date.valueOf(String.valueOf(blogg.getPublication()));
        if(publication.after(nowDate)) {
            return null;
        }
        return bloggRepo.save(blogg);
    }
}