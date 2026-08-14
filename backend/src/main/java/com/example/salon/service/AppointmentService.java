package com.example.salon.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.salon.entity.Appointment;
import com.example.salon.repository.AppointmentRepository;

@Service
public class AppointmentService {

    private final AppointmentRepository repository;

    public AppointmentService(AppointmentRepository repository) {
        this.repository = repository;
    }

    // Book appointment
    public Appointment bookAppointment(Appointment appointment) {

        // एका दिवसाला maximum 12 appointments
        long count = repository.countByDate(appointment.getDate());

        if (count >= 12) {
            throw new RuntimeException(
                "Sorry, only 12 appointments are allowed per day."
            );
        }

        return repository.save(appointment);
    }

    // Get all appointments
    public List<Appointment> getAllAppointments() {
        return repository.findAll();
    }

    // Get appointments by mobile
    public List<Appointment> getByMobile(String mobile) {
        return repository.findByMobile(mobile);
    }

    // Get appointments by date
    public List<Appointment> getByDate(String date) {
        return repository.findByDate(date);
    }

    // Delete appointment
    public void deleteAppointment(Long id) {
        repository.deleteById(id);
    }
}