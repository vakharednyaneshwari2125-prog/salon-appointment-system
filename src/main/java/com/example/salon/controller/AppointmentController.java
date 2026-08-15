package com.example.salon.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.salon.entity.Appointment;
import com.example.salon.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:5173")
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    // Book appointment
    @PostMapping
    public ResponseEntity<?> bookAppointment(
            @RequestBody Appointment appointment) {

        try {
            Appointment savedAppointment =
                    service.bookAppointment(appointment);

            return ResponseEntity.ok(savedAppointment);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }

    // Get all appointments
    @GetMapping
    public List<Appointment> getAllAppointments() {
        return service.getAllAppointments();
    }

    // Get appointments by mobile
    @GetMapping("/mobile/{mobile}")
    public List<Appointment> getByMobile(
            @PathVariable("mobile") String mobile) {

        return service.getByMobile(mobile);
    }

    // Get appointments by date
    @GetMapping("/date/{date}")
    public List<Appointment> getByDate(
            @PathVariable("date") String date) {

        return service.getByDate(date);
    }

    // Delete appointment
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointment(
            @PathVariable("id") Long id) {

        service.deleteAppointment(id);

        return ResponseEntity.ok(
                "Appointment cancelled successfully"
        );
    }
}