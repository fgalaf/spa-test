<script>
  import { t } from "$lib/i18n/i18n";
	import SecondTextBox from "./SecondTextBox.svelte";
</script>

<main>
  <div class="relative flex flex-col sm:flex-row sm:flex-wrap justify-around items-center min-h-[300px]">
    <SecondTextBox headerText={$t("second_header_0")} bodyText={$t("second_text_0")}/>
    <SecondTextBox headerText={$t("second_header_1")} bodyText={$t("second_text_1")}/>
    <SecondTextBox headerText={$t("second_header_2")} bodyText={$t("second_text_2")}/>
  </div>
</main>
