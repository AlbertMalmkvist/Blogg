package com.example.demo.repositories;

import com.example.demo.entities.Blogg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public class BloggRepo {

    @Autowired
    private JdbcTemplate jdbcTemplate = new JdbcTemplate();

    List<Blogg> result = jdbcTemplate.query(
            "SELECT id, title, description, publication FROM artikel",
            (rs, rowNum) -> new Blogg(rs.getInt("id"),
                    rs.getString("title"), rs.getString("description"), rs.getDate("publication"))
    );

    public void addCustomer(String title, String description) {

        jdbcTemplate.update("INSERT INTO customer(name, email, created_date) VALUES (?,?,?)",
                title, description, new Date());

    }
}