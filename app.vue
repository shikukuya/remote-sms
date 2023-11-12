<template>
  <div>
    <div class="sms" v-for="sms in smsList">
      {{ new Date(sms.time).toLocaleString() }}: {{ sms.text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const smsList = ref<{ text: string; time: number }[]>();

onMounted(async () => {
  const { data } = await useFetch("/api/sms");
  smsList.value = data.value?.smsList!;
});
</script>
