;; Simple Escrow Contract

(define-map deposits { user: principal } { amount: uint })

(define-public (deposit (amount uint))
  (map-set deposits { user: tx-sender } { amount })
  (ok "Deposited")
)

(define-public (release (user principal))
  (map-set deposits { user } { amount: u0 })
  (ok "Released")
)

(define-read-only (get-deposit (user principal))
  (default-to u0 (get amount (map-get? deposits { user })))
)
