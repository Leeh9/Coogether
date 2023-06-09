package coogether.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import coogether.backend.domain.status.EnumIngredientCategory;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "ingredient")
public class Ingredient {

    @JsonIgnore
    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MyIngredientManage> myIngredientManageList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<IngredientFav> ingredientFavList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<IngredientList> ingredientList = new ArrayList<>();


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingredient_id", nullable = false)
    private Long ingredientId;

    @Column(name = "ingredient_name", length = 30, nullable = false)
    private String ingredientName;

    @Enumerated(EnumType.STRING)
    @Column(name = "ingredient_category", nullable = false)
    private EnumIngredientCategory ingredientCategory;

    @Column(name = "ingredient_icon", length = 1000, nullable = true)
    private String ingredientIcon;
}
