package com.example.demo.services;

import com.example.demo.entities.Blogg;
import com.example.demo.repositories.BloggRepo;
import com.example.demo.repositories.BidRepo;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class BloggService {
    @Autowired
    BloggRepo bloggRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    BidRepo bidRepo;

    public List<Blogg> findAllBloggs() {
        List<Blogg> bloggs =  (List<blogg>) bloggRepo.findAllByOrderByIdDesc();

        for(Blogg blogg : bloggs) {
            blogg.setSellerUsername(userRepo.findById(blogg.getSeller()).get().getUsername());
            bidRepo.findFirstByBloggIdOrderByBidDesc(blogg.getId()).ifPresent(bid -> blogg.setHighestBid(bid.getBid()));
        }
        return bloggs;
    }

    public Blogg findBlogg(int id) {
        Blogg blogg=bloggRepo.findById(id);
        if ( blogg == null ) return null;

        blogg.setSellerUsername(userRepo.findById(blogg.getSeller()).get().getUsername());
        bidRepo.findFirstByBloggIdOrderByBidDesc(blogg.getId()).ifPresent(bid -> blogg.setHighestBid(bid.getBid()));

        return Blogg;
    }
    
    public Blogg createNewBlogg(Blogg blogg) {
        Date nowDate = Date.valueOf(LocalDate.now());
        Date startDate = Date.valueOf(blogg.getStart_time());
        Date endDate = Date.valueOf(blogg.getEnd_time());

        if(nowDate.after(startDate) || startDate.after(endDate) || startDate.equals(endDate)) {
            return null;
        }

        return BloggRepo.save(Blogg);
    }

}

