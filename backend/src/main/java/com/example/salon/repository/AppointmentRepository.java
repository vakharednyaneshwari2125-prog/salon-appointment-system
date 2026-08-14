package com.example.salon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.salon.entity.Appointment;

public interface AppointmentRepository
        extends JpaRepository<Appointment, Long> {

    List<Appointment> findByMobile(String mobile);

    List<Appointment> findByDate(String date);

    long countByDate(String date);
}