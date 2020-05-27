"""empty message

Revision ID: 092ef479e127
Revises: 47bd4e69befd
Create Date: 2020-05-03 18:53:00.724184

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '092ef479e127'
down_revision = '47bd4e69befd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('game')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('game',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('created_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.Column('updated_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.Column('last_updated_by', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('title', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('secret_word', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('passphrase', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='game_pkey')
    )
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('created_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.Column('updated_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.Column('last_updated_by', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('public_id', sa.VARCHAR(length=36), autoincrement=False, nullable=True),
    sa.Column('username', sa.VARCHAR(length=50), autoincrement=False, nullable=True),
    sa.Column('password', sa.VARCHAR(length=128), autoincrement=False, nullable=True),
    sa.Column('admin', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('date_created', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='user_pkey')
    )
    # ### end Alembic commands ###
