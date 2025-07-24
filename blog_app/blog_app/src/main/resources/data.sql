-- Insert default roles if they don't exist
INSERT IGNORE INTO role (id, name) VALUES (501, 'ROLE_ADMIN');
INSERT IGNORE INTO role (id, name) VALUES (502, 'ROLE_NORMAL');

-- Insert default categories
INSERT IGNORE INTO category (category_id, title, description) VALUES 
(1, 'Technology', 'Latest technology trends and innovations'),
(2, 'Lifestyle', 'Tips and insights for better living'),
(3, 'Travel', 'Explore the world through amazing stories'),
(4, 'Food', 'Delicious recipes and culinary adventures'),
(5, 'Health', 'Health and wellness tips for a better life');