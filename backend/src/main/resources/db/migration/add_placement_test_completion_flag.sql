-- Add hasCompletedPlacementTest flag to users table
ALTER TABLE users 
ADD COLUMN has_completed_placement_test BOOLEAN DEFAULT FALSE;

-- Update existing users who have completed placement tests
UPDATE users u
SET has_completed_placement_test = TRUE
WHERE EXISTS (
    SELECT 1 
    FROM placement_tests pt 
    WHERE pt.user_id = u.id 
    AND pt.is_completed = TRUE
);
