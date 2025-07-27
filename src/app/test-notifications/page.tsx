"use client"

import { Button } from "@/components/ui/button"
import { notifications } from "@/lib/notifications"

export default function SimpleNotificationTest() {
  return (
    <div className="container mx-auto max-w-2xl p-8">
      <h1 className="mb-8 text-3xl font-bold">Sonner通知システムテスト</h1>
      
      <div className="space-y-4">
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">基本通知テスト</h2>
          <div className="flex gap-4">
            <Button 
              onClick={() => notifications.success("設定を保存しました")}
              variant="default"
            >
              成功通知
            </Button>
            
            <Button 
              onClick={() => notifications.error("デバイスとの接続に失敗しました")}
              variant="destructive"
            >
              エラー通知
            </Button>
            
            <Button 
              onClick={() => notifications.info("キャリブレーションを開始します")}
              variant="outline"
            >
              情報通知
            </Button>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">オプション付き通知</h2>
          <div className="flex gap-4">
            <Button 
              onClick={() => notifications.success("設定を保存しました", { duration: 6000 })}
              variant="default"
            >
              長時間表示
            </Button>
            
            <Button 
              onClick={() => notifications.info("キーマップ設定", { 
                description: "キーの設定が更新されました",
                duration: 5000 
              })}
              variant="outline"
            >
              説明付き
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
