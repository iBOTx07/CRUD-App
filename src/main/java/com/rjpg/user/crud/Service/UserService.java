package com.rjpg.user.crud.Service;

import com.rjpg.user.crud.DTO.UserDTO;
import com.rjpg.user.crud.Entity.User;
import com.rjpg.user.crud.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User saveUser(User user){
        return userRepository.save(user);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User getUserById(Long user_id){
        return userRepository.findById(user_id).orElse(null);
    }

    public void deleteUser(Long user_id){
        userRepository.deleteById(user_id);
    }

    public User updateUser(Long user_id, UserDTO updatedUser){
        User existingUser = userRepository.findById(user_id).orElse(null);
        if (existingUser != null){
            existingUser.setFirst_name(updatedUser.getFirst_name());
            existingUser.setLast_name(updatedUser.getLast_name());
            existingUser.setEmail(updatedUser.getEmail());
            return userRepository.save(existingUser);
        }
        return null;
    }
}
