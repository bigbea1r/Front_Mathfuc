<template>
   <div class="wrapper__header">
     <div class="header">
       <div class="route-obj">
         <router-link to="/" class="logo_case">
           <img src="/hedgehog.svg" class="logo" alt="logo_math_faculty" />
           <div class="friend_text">
             <div class="big_text_logo">Математический факультет</div>
             <div class="small_text_logo">Изучение математики - интелектуальные инвестиции в будущее</div>
           </div>
         </router-link>
         <div class="line" @mouseenter="startAnimation" @mouseleave="stopAnimation" @click="togglePopup">Студенты</div>
         <router-link class="line" to="/#">Абитурентам</router-link>
         <router-link class="line" to="/#">Преподавателям</router-link>
         <router-link class="line" to="/#">О факультете</router-link>
         <router-link class="line" to="/#">Контакты</router-link>
       </div>
       <div class="running-line"></div> <!-- Добавляем бегущую линию -->
     </div>
   </div>
   <div :class="{ 'hidden': isPopupHidden, 'slide-in': !isPopupHidden, 'slide-out': isPopupHidden }" class="popup_students">
    <router-link to="/conferences_for_students">Конференция для студентов</router-link>
    <router-link to="/conferences_for_teachers">Конференция для преподавателей</router-link>
    <router-link to="/achievements">Достижения факультета</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      isPopupHidden: true,
      isAnimating: false
    };
  },
  methods: {
    togglePopup() {
      this.isPopupHidden = !this.isPopupHidden;
    },
    startAnimation() {
      this.isAnimating = true;
    },
    stopAnimation() {
      this.isAnimating = false;
    }
  }
}
</script>