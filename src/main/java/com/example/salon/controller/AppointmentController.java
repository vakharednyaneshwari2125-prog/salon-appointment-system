package com.example.salon.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.salon.entity.Appointment;
import com.example.salon.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(
    origins = {
        "http://localhost:5173",
        "https://salon-appointment-system-teal.vercel.app"
    }
)
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

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

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return service.getAllAppointments();
    }

    @GetMapping("/mobile/{mobile}")
    public List<Appointment> getByMobile(
            @PathVariable("mobile") String mobile) {

        return service.getByMobile(mobile);
    }

    @GetMapping("/date/{date}")
    public List<Appointment> getByDate(
            @PathVariable("date") String date) {

        return service.getByMobile(date);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointment(
            @PathVariable("id") Long id) {

        service.deleteAppointment(id);

        return ResponseEntity.ok(
                "Appointment cancelled successfully"
        );
    }
}