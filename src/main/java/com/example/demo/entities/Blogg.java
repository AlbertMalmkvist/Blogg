package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "bloggs")
public class Blogg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String description;
    private String publishing_time;

    public Blogg() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPublishing_time() {
        return publishing_time;
    }

    public void setPublishing_time(String publishing_time) {
        this.publishing_time = publishing_time;
    }
}