package com.rjpg.user.crud.Repository;

import com.rjpg.user.crud.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
