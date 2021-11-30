<script lang="ts">
</script>

<div class="card border rounded-lg bg-white divide-y mb-4">
	<div class="body p-4">
		<slot />
	</div>
	<div class="footer p-4 bg-gray-100 rounded-b-lg text-gray-500">
		<slot name="footer" />
	</div>
</div>
