<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220123091204 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX banned_index_content ON banned');
        $this->addSql('ALTER TABLE banned ADD message_id INT NOT NULL, ADD comment LONGTEXT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL, CHANGE insta insta VARCHAR(255) DEFAULT NULL, CHANGE messenger messenger VARCHAR(255) DEFAULT NULL, CHANGE snap snap VARCHAR(255) DEFAULT NULL');
        $this->addSql('CREATE INDEX banned_index_content ON banned (content)');
        $this->addSql('ALTER TABLE image CHANGE update_at update_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE message CHANGE url_id url_id INT DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL, CHANGE prenom prenom VARCHAR(255) DEFAULT NULL, CHANGE type type VARCHAR(255) DEFAULT NULL, CHANGE insta insta VARCHAR(255) DEFAULT NULL, CHANGE messenger messenger VARCHAR(255) DEFAULT NULL, CHANGE snap snap VARCHAR(255) DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL, CHANGE time_to_show_message time_to_show_message VARCHAR(255) DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE step step VARCHAR(255) DEFAULT NULL, CHANGE name_reglage name_reglage VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE payment CHANGE message_id message_id INT DEFAULT NULL, CHANGE reference reference VARCHAR(255) DEFAULT NULL, CHANGE stripe_token stripe_token VARCHAR(255) DEFAULT NULL, CHANGE brand_stripe brand_stripe VARCHAR(255) DEFAULT NULL, CHANGE charge_stripe charge_stripe VARCHAR(255) DEFAULT NULL, CHANGE status_stripe status_stripe VARCHAR(255) DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE report CHANGE user_id user_id INT DEFAULT NULL, CHANGE ip ip VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE url CHANGE category category VARCHAR(255) DEFAULT NULL, CHANGE user_visited user_visited JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE image_id image_id INT DEFAULT NULL, CHANGE credit credit INT DEFAULT NULL, CHANGE language language VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE visit CHANGE ip ip VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX banned_index_content ON banned');
        $this->addSql('ALTER TABLE banned DROP message_id, DROP comment, CHANGE email email VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE insta insta VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE messenger messenger VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE snap snap VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`');
        $this->addSql('CREATE INDEX banned_index_content ON banned (content(1024))');
        $this->addSql('ALTER TABLE image CHANGE update_at update_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE message CHANGE url_id url_id INT DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL, CHANGE name_reglage name_reglage VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE prenom prenom VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE type type VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE insta insta VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE messenger messenger VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE snap snap VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE email email VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE time_to_show_message time_to_show_message VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\', CHANGE step step VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`');
        $this->addSql('ALTER TABLE payment CHANGE message_id message_id INT DEFAULT NULL, CHANGE reference reference VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE stripe_token stripe_token VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE brand_stripe brand_stripe VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE charge_stripe charge_stripe VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE status_stripe status_stripe VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE report CHANGE user_id user_id INT DEFAULT NULL, CHANGE ip ip VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`');
        $this->addSql('ALTER TABLE url CHANGE category category VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`, CHANGE user_visited user_visited LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE user CHANGE image_id image_id INT DEFAULT NULL, CHANGE credit credit INT DEFAULT NULL, CHANGE language language VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`');
        $this->addSql('ALTER TABLE visit CHANGE ip ip VARCHAR(255) CHARACTER SET utf8 DEFAULT \'NULL\' COLLATE `utf8_unicode_ci`');
    }
}
