package coogether.backend.dto.auth;

import coogether.backend.domain.User;
import lombok.Data;

@Data
public class SignupResponseDto {

    User user;
    String result;
}
