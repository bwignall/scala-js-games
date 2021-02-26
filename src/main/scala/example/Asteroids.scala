package example

import org.scalajs.dom
import scala.util.Random

case class Asteroids(bounds: Point, resetGame: () => Unit) extends Game {

  var bullets = Seq.empty[Bullet]
  val craft = new Craft(bounds / 2, Point(0, 0), 0)
  var frameCount = 0
  var asteroids: Seq[Asteroid] = Seq.fill(10)(
    new Asteroid(
      3,
      if (Random.nextBoolean())
        Point(0, Random.nextInt(bounds.y.toInt).toDouble)
      else Point(Random.nextInt(bounds.y.toInt).toDouble, 0),
      Point(Random.nextInt(5).toDouble, Random.nextInt(5).toDouble) - Point(
        2.5,
        2.5
      )
    )
  )

  def update(keys: Set[Int]): Unit = {
    frameCount += 1

    asteroids.foreach(_.move())
    bullets.foreach(_.move())
    craft.move(keys)

    if (keys(32) && bullets.length < 10 && frameCount % 2 == 0) {
      bullets = bullets :+ new Bullet(
        craft.position,
        craft.momentum + Point(15, 0).rotate(craft.theta)
      )
    }

    val changes = for {
      b <- bullets
      a <- asteroids
      if a.contains(b.position)
    } yield {
      val newAsteroids =
        if (a.level == 1) Nil
        else {
          Seq(30, -30).map(d =>
            new Asteroid(
              a.level - 1,
              a.position,
              a.momentum.rotate(d * Math.PI / 180)
            )
          )
        }
      ((a, b), newAsteroids)
    }
    val (removed, added) = changes.unzip
    val removed_asteroids = removed map { _._1 }
    val removed_bullets = removed map { _._2 }
    asteroids =
      asteroids.filter(!removed_asteroids.contains(_)) ++ added.flatten
    bullets = bullets
      .filter(!removed_bullets.contains(_))
      .filter(_.position.within(Point(0, 0), bounds))

    if (asteroids.exists(_.contains(craft.position))) {
      result = Some("Your ship hit an asteroid!")
      resetGame()
    } else if (asteroids.isEmpty) {
      result = Some("You successfully destroyed every asteroid!")
      resetGame()
    }
  }

  def draw(ctx: dom.CanvasRenderingContext2D): Unit = {
    ctx.fillStyle = Color.Black
    ctx.fillRect(0, 0, 800, 800)

    ctx.fillStyle = Color.White
    ctx.strokeStyle = Color.White

    asteroids.foreach(_.draw(ctx))
    bullets.foreach(_.draw(ctx))
    craft.draw(ctx)
  }

  class Asteroid(val level: Int, var position: Point, val momentum: Point) {
    def draw(ctx: dom.CanvasRenderingContext2D): Unit = {
      val size = 10 * level
      ctx.fillRect(
        position.x - size / 2,
        position.y - size / 2,
        size.toDouble,
        size.toDouble
      )
    }
    def move(): Unit = {
      position += momentum
      position += bounds
      position %= bounds
    }
    def contains(other: Point): Boolean = {
      val min = position - Point(5, 5) * level.toDouble
      val max = position + Point(5, 5) * level.toDouble
      other.within(min, max)
    }
  }

  class Craft(var position: Point, var momentum: Point, var theta: Double) {
    def draw(ctx: dom.CanvasRenderingContext2D): Unit = {
      ctx.beginPath()
      val pts = Seq(
        Point(15, 0).rotate(theta) + position,
        Point(7, 0).rotate(theta + 127.5 / 180 * Math.PI) + position,
        Point(7, 0).rotate(theta - 127.5 / 180 * Math.PI) + position
      )
      ctx.moveTo(pts.last.x, pts.last.y)
      pts.foreach(p => ctx.lineTo(p.x, p.y))
      ctx.fill()
    }
    def move(keys: Set[Int]): Unit = {
      position += momentum
      position += bounds
      position %= bounds

      if (keys(37)) theta -= 0.05
      if (keys(38)) momentum += Point(0.2, 0).rotate(theta)
      if (keys(39)) theta += 0.05
      if (keys(40)) momentum -= Point(0.2, 0).rotate(theta)
    }
  }
  class Bullet(var position: Point, val momentum: Point) {
    def draw(ctx: dom.CanvasRenderingContext2D): Unit = {
      ctx.beginPath()
      ctx.moveTo(position.x, position.y)
      val forward = position + momentum * 5.0 / momentum.length
      ctx.lineTo(forward.x, forward.y)
      ctx.stroke()
    }

    def move(): Unit = {
      position += momentum
    }
  }
}
