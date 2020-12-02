package com.example.demo.repositories;

import com.example.demo.entities.Blogg;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloggRepo extends CrudRepository<Blogg, Integer> {
    public Blogg findById(int id);
    Iterable<Blogg> findAllByOrderByIdDesc();
    Blogg deleteById(int id);
}