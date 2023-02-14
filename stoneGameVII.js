const stoneGameVII = function(stones) {

	// 計算前綴和
	const len = stones.length;
	const pre = [...stones]; // 複製一份 stones 陣列
	for (let i = 1; i < len; i++) {
		pre[i] += pre[i - 1];
	}

	 // 初始化 dp 陣列
	const dp = Array.from(Array(len), () => Array(len).fill(0));

	// 利用迴圈計算可能的區間長度，計算 dp[i][j]
	for (let l = 1; l < len; l++) {  // l 表示區間的長度
		for (let i = 0; i < len - l; i++) { // i 表示區間的左側
			const j = i + l; // j 表示區間的右側
			
			// 根據狀態計算 dp[i][j]，並取最大值
			dp[i][j] = Math.max(
				pre[j - 1] - (pre[i - 1] || 0) - dp[i][j - 1],
				pre[j] - pre[i] - dp[i + 1][j]

			// 選擇左端點 i，並取走 stones[i]，得到石頭的分數 pre[j-1] - pre[i-1]
			// 再加上右邊剩下的所得的分數 dp[i][j-1]
			// 總分為 pre[j-1] - pre[i-1] - dp[i][j-1]

			// 選擇右端點 j，並取走 stones[j]，得到石頭的分數 pre[j] - pre[i]
			// 再加上左邊剩下的所得的分數 dp[i+1][j]
			// 總分為 pre[j] - pre[i] - dp[i+1][j]。
			
			);
		}
	}

	// 返回最終結果
	return dp[0][len - 1];
};


// 測試結果
const result = stoneGameVII([7, 90, 5, 1, 100, 10, 10, 2]);
console.log(result);


// 參考資料
// https://hackmd.io/@erichung0906/H1E2oT5lO
// https://chupai.github.io/posts/2009/divide_and_conquer_dp/


// 根據目前的實力，我必須老實說，我還沒辦法解出，只能參考別人作法。
// 但我也盡力試著去解析每一個步驟，以及程式這段背後運作的邏輯。
