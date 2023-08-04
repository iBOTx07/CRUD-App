package com.rjpg.user.crud.Controller;

import com.rjpg.user.crud.DTO.UserDTO;
import com.rjpg.user.crud.Entity.User;
import com.rjpg.user.crud.Service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping
    public User createUser(@RequestBody UserDTO userDTO){
        User newUser= new User();
        newUser.setFirst_name(userDTO.getFirst_name());
        newUser.setLast_name(userDTO.getLast_name());
        newUser.setEmail(userDTO.getEmail());
        return userService.saveUser(newUser);
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{user_id}")
    public User getUserById(@PathVariable Long user_id){
        return userService.getUserById(user_id);
    }

    @PutMapping("/{user_id}")
    public User updateUser(@PathVariable Long user_id, @RequestBody UserDTO userDTO){
        return userService.updateUser(user_id, userDTO);
    }

    @DeleteMapping("/{user_id}")
    public void deleteUser(@PathVariable Long user_id){
        userService.deleteUser(user_id);
    }
}
